module Api
  module V1
    class SearchController < ApplicationController
      def list_queries
        all_queries = SearchQuery.all

        render json: { data: all_queries }, status: :ok
      end

      def index
        query = params[:query].strip
        ip_address = request.remote_ip
        first_two_parts = ip_address.split('.').take(2).join('.')
        modified_ip = "#{first_two_parts}.***.***"

        Rails.logger.info("Search query: #{query}, IP address: #{modified_ip}")

        queries_from_ip = SearchQuery.where(ip_address: modified_ip)

        if partial_query_exists?(queries_from_ip, query)
          update_existing_queries(queries_from_ip, query)
        elsif !complete_query_exists?(queries_from_ip, query)
          create_new_query(modified_ip, query)
        end

        render json: { data: { success: true } }, status: :ok
      end

      private

      def partial_query_exists?(existing_queries, new_query)
        existing_queries.any? { |existing_query| new_query_includes_old_query?(new_query: new_query, old_query: existing_query.query) }
      end

      def complete_query_exists?(existing_queries, new_query)
        existing_queries.any? { |existing_query| new_query_includes_old_query?(new_query: existing_query.query, old_query: new_query) }
      end

      def update_existing_queries(existing_queries, new_query)
        existing_queries.each do |existing_query|
          if new_query_includes_old_query?(new_query: new_query, old_query: existing_query.query)
            existing_query.update(query: new_query)
          end
        end
      end

      def new_query_includes_old_query?(new_query:, old_query:)
        new_query.include?(old_query)
      end

      def create_new_query(ip_address, query)
        SearchQuery.create(ip_address: ip_address, query: query)
      end
    end
  end
end
