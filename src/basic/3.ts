let unionType: string | number;
unionType = "string";
unionType = 10;

type EnableOrDisable = "enable" | "disable";
let literalType: EnableOrDisable;
literalType = "enable";
literalType = "disable";

export { unionType, literalType };