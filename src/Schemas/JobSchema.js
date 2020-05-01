export default class JobSchema {
    static schema = {
        name: 'Job',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            nome: 'string',
            cargo: 'string',
        }
    }
}