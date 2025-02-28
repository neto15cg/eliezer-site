package routes

import (
	"app/internal/handlers"

	"github.com/gin-gonic/gin"
)

func SetupConversationRoutes(router *gin.Engine, chatHandler *handlers.ChatHandler, messageHandler *handlers.MessageHandler) {
	conversation := router.Group("/conversation")
	{
		conversation.POST("", chatHandler.SendConversationMessage)
		conversation.GET("/:conversation_id", messageHandler.GetByConversationId)
	}
}
