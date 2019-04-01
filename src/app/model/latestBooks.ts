import {Isbn} from "./isbn.model";
import { extend } from "webdriver-js-extender";

export interface LatestBooks extends Isbn
{
    Name : string;
    Image : string;
    PublishingYear: string;
}