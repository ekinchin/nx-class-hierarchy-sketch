import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Qr } from "./Qr";

@Entity("package_list", { schema: "public" })
export class PackageList {
  @Column("character varying", { name: "name" })
  name: string;

  @Column("date", { name: "inserted_at", nullable: true })
  insertedAt: string | null;

  @Column("date", { name: "extracted_at", nullable: true })
  extractedAt: string | null;

  @ManyToOne(() => Qr, (qr) => qr.packageLists)
  @JoinColumn([{ name: "code", referencedColumnName: "code" }])
  code: Qr;
}
