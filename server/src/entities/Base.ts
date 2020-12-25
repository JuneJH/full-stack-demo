import {validate} from "class-validator";

export class Base{
    /**
     * 验证数据是否正确
     * @param skipUndefinedProperties 验证时是否跳过值为undefined
     */
    public async validator(skipUndefinedProperties = false): Promise<string[]> {
        const result = await validate(this, {
            skipUndefinedProperties,
        });
        const re = result.map(ele => {
            if (ele.constraints) {
                return Object.values(ele.constraints);
            }
            return []
        })
        return re.flat(2);
    };

}