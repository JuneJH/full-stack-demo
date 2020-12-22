import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column()
    public types: string;

    @Column()
    public areas: string;

    @Column()
    public timeLong: number;

    @Column()
    public isHot: boolean = false;

    @Column()
    public isComing: boolean = false;

    @Column()
    public isClassic: boolean = false;

    @Column()
    public description?: string;

    @Column()
    public poster?: string;
}