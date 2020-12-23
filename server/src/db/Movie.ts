import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column("simple-array")
    public types: string[];

    @Column("simple-array")
    public areas: string[];

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