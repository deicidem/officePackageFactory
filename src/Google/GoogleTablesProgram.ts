import { Table, TablesProgram } from "../AbstractFactory";

export class GoogleTablesProgram implements TablesProgram {
  tables: Table[];
  name = "Google Sheets";
  constructor() {
    this.tables = [];
  }
  createTable(table: Table) {
    this.tables.push(table);
  }
  changeTable(tableId: number, content: object): void {
    this.tables = this.tables.map((t) =>
      t.id == tableId ? { ...t, content } : t
    );
  }
  saveTables(path: string): void {
    console.log("Tables are saved in: " + path);
  }
}
