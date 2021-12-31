import { LowSync, MemorySync } from 'lowdb'

const db = new LowSync(new MemorySync())

// init DB
db.data = {
    fps: 1
};

export default db;