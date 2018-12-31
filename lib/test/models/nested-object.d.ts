import * as tg from '../../typegoose';
export declare class AddressNested {
    street: string;
    constructor(street: string);
}
export declare class PersonNested extends tg.Typegoose {
    name: string;
    address: AddressNested;
    moreAddresses: AddressNested[];
}
export declare const PersonNestedModel: any;
