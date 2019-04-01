import {Isbn} from './isbn.model';
import {NotificationDetails} from './notificationDetails.Model';
import { BlockBooks } from './blockBooks';
export class Book {

    AvailableCopies: number;
    BlockedCopies: number;
    Created:  string;
    ISBNNumber: Isbn[];
    Id: string;
    Image: string;
    LastUpdated: string;
    Name: string;
    Notification: NotificationDetails[];
    NumberOfCopies: number;
    BookID: string;
    arr: string;
    blockBooks: BlockBooks[];
}
