import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(
                'mongodb+srv://admin:pedro@cluster0.2iava.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                
            ),
    },
];
