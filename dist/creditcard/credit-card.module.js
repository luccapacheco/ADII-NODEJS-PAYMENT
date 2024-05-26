"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardModule = void 0;
const common_1 = require("@nestjs/common");
const credit_card_controller_1 = require("./credit-card.controller");
const credit_card_service_1 = require("./credit-card.service");
const prisma_service_1 = require("../prisma.service");
const microservices_1 = require("@nestjs/microservices");
let CreditCardModule = class CreditCardModule {
};
exports.CreditCardModule = CreditCardModule;
exports.CreditCardModule = CreditCardModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'NOTIFICATION_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://admin:123456@localhost'],
                        queue: 'notification',
                        noAck: true,
                        queueOptions: {
                            durable: true,
                        },
                    },
                },
            ]),
        ],
        controllers: [credit_card_controller_1.CreditCardController],
        providers: [credit_card_service_1.CreditCardService, prisma_service_1.PrismaService],
    })
], CreditCardModule);
//# sourceMappingURL=credit-card.module.js.map