package services

import (
	"app/models"

	"github.com/google/uuid"
)

func (s *messageService) CreateMessage(content string, response string, conversationID *uuid.UUID) (*models.Message, error) {
	message := &models.Message{
		ID:             uuid.New(),
		Message:        content,
		ConversationID: conversationID,
		Response:       &response,
	}

	if err := message.Validate(); err != nil {
		return nil, err
	}

	if err := s.repo.Create(message); err != nil {
		return nil, err
	}

	return message, nil
}

func (s *messageService) ListMessages() ([]models.Message, error) {
	return s.repo.List()
}

func (s *messageService) GetMessage(id uuid.UUID) (*models.Message, error) {
	return s.repo.GetByID(id)
}

func (s *messageService) GetMessagesByConversationID(conversationID uuid.UUID) ([]models.Message, error) {
	return s.repo.GetByConversationID(conversationID)
}
