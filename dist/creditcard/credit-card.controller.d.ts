import { CreditCardService } from './credit-card.service';
import { CreditCard, Prisma } from '@prisma/client';
export declare class CreditCardController {
    private readonly creditCardService;
    constructor(creditCardService: CreditCardService);
    send(data: Prisma.CreditCardCreateInput): Promise<CreditCard>;
}
