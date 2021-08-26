import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Qr } from "./Qr";

@Index("package_list_pk", ["code", "insertedAt", "name"], { unique: true })
@Entity("package_list", { schema: "public" })
export class PackageList {
  @Column("character varying", { primary: true, name: "code" })
  code: string;

  @Column("character varying", { primary: true, name: "name" })
  name: string;

  @Column("date", { primary: true, name: "inserted_at" })
  insertedAt: string;

  @Column("date", { name: "extracted_at", nullable: true })
  extractedAt: string | null;

  @ManyToOne(() => Qr, (qr) => qr.packageLists)
  @JoinColumn([{ name: "code", referencedColumnName: "code" }])
  code2: Qr;
}
