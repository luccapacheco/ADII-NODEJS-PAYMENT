import { ClientProxy } from '@nestjs/microservices';
import { CreditCard, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class CreditCardService {
    private prisma;
    private client;
    constructor(prisma: PrismaService, client: ClientProxy);
    create(data: Prisma.CreditCardCreateInput): Promise<CreditCard>;
    processPayment(payment: CreditCard): Promise<void>;
    sendRegisterPaymentNotification(message: string): void;
    sendConfirmationPaymentNotification(message: string): void;
}
