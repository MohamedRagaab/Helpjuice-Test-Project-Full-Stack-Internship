require 'rails_helper'

RSpec.describe 'Search API', type: :request do
  it 'returns search results' do
    get '/api/v1/articles/search', params: { query: 'example' }
    expect(response).to have_http_status(:success)
  end
end

RSpec.describe 'list search queries', type: :request do
  it 'returns search results' do
    get '/api/v1/list_queries'
    expect(response).to have_http_status(:success)
  end
end
