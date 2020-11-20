module Api
  module V1
    class GuidesController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        guide = character.guides.new(guide_params)

        if guide.save
          render json: GuideSerializer.new(guide).serialized_json
        else
          render json: {error: guide.errors.messages}, status: 422
        end
      end

      def destroy
        guide = Guide.find_by(params[:id])

        if guide.destroy
          head :no_content
        else
          render json: {error: character.errors.messages}, status: 422
        end
      end

      private

      def character
        @character ||= Character.find(params[:character_id])
      end
      def guide_params
        params.require(:guide).permit(:title, :description, :character_id, :score)
      end
    end
  end
end
