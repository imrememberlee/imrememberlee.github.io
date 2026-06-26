declare const _default: {
    medicineGroup: ({
        groupId: string;
        medicine: string;
        doctordExecute: {
            abbreviation: string;
            methodName: string;
            unit: string;
            pumpSeed: number;
            time: {
                startTime: number;
                endTime: number;
            };
            actionList: ({
                actionType: string;
                actionUser: string;
                label: string;
                msg: string;
                time: number;
                hide?: undefined;
            } | {
                actionType: string;
                actionUser: string;
                label: string;
                msg: string;
                time: number;
                hide: boolean;
            })[];
        }[];
        abbreviation?: undefined;
        methodName?: undefined;
        unit?: undefined;
        pumpSeed?: undefined;
    } | {
        groupId: string;
        medicine: string;
        abbreviation: string;
        methodName: string;
        unit: string;
        pumpSeed: number;
        doctordExecute: {
            abbreviation: string;
            methodName: string;
            unit: string;
            pumpSeed: number;
            time: {
                startTime: number;
                endTime: number;
            };
            actionList: {
                actionType: string;
                actionUser: string;
                label: string;
                msg: string;
                time: number;
            }[];
        }[];
    })[];
    startTime: number;
    endTime: number;
};
export default _default;
