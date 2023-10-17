import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';


@Injectable()
export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        // DONT TO THIS ON REAL APPS
        this.messagesRepo = new MessagesRepository;
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    createMessage(content: string) {
        return this.messagesRepo.create(content);
    }
}
