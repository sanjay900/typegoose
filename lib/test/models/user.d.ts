import { Job } from './job';
import { Car } from './car';
import { Gender } from '../enums/genders';
import { Role } from '../enums/role';
import { Ref, Typegoose, ModelType, InstanceType } from '../../typegoose';
export interface FindOrCreateResult<T> {
    created: boolean;
    doc: InstanceType<T>;
}
export declare class User extends Typegoose {
    firstName: string;
    lastName: string;
    fullName: string;
    nick?: string;
    uniqueId?: string;
    username?: string;
    expireAt?: Date;
    age?: number;
    gender: Gender;
    role: Role;
    roles: Role[];
    job?: Job;
    car?: Ref<Car>;
    languages: string[];
    previousJobs?: Job[];
    previousCars?: Ref<Car>[];
    static findByAge(this: ModelType<User> & typeof User, age: number): any;
    incrementAge(this: InstanceType<User>): any;
    addLanguage(this: InstanceType<User>): any;
    addJob(this: InstanceType<User>, job?: Partial<Job>): any;
    static findOrCreate: (condition: any) => Promise<FindOrCreateResult<User>>;
}
export declare const model: any;
