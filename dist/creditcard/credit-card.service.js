"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma.service");
let CreditCardService = class CreditCardService {
    constructor(prisma, client) {
        this.prisma = prisma;
        this.client = client;
    }
    async create(data) {
        const creditCard = await this.prisma.creditCard.create({
            data: { ...data },
        });
        this.sendRegisterPaymentNotification(JSON.stringify(creditCard));
        this.processPayment(creditCard);
        return creditCard;
    }
    async processPayment(payment) {
        setTimeout(() => this.sendConfirmationPaymentNotification(JSON.stringify(payment)), 10000);
    }
    sendRegisterPaymentNotification(message) {
        try {
            this.client.emit('register', {
                id: (0, crypto_1.randomUUID)(),
                data: { notification: message },
            }).subscribe({
                next: () => console.log('Message acknowledged'),
                error: (err) => console.error('Message not acknowledged', err),
            });
        }
        catch (ex) {
            console.log(ex);
        }
    }
    sendConfirmationPaymentNotification(message) {
        try {
            this.client.emit('confirmation', {
                id: (0, crypto_1.randomUUID)(),
                data: { notification: message },
            }).subscribe({
                next: () => console.log('Message acknowledged'),
                error: (err) => console.error('Message not acknowledged', err),
            });
        }
        catch (ex) {
            console.log(ex);
        }
    }
};
exports.CreditCardService = CreditCardService;
exports.CreditCardService = CreditCardService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('NOTIFICATION_SERVICE')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        microservices_1.ClientProxy])
], CreditCardService);
//# sourceMappingURL=credit-card.service.js.map