class PagesController < ApplicationController
  def index
  end
	def episodes
		@episodes = Course.first.episodes

		render json: { data: @pisodes }
  end
end
