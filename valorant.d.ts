namespace valorant {
    /**
     * Describes a single class field, including its name and memory offset.
     */
    interface ClassField {
        /** The name of the class field. */
        name: string;
        /** The memory offset associated with the field. */
        offset: number;
    }

    /**
     * Returns a table (array) containing the class fields for the specified
     * class pointer in Valorant. Each entry in the table includes:
     *  - name (string)   The name of the class field
     *  - offset (number) The memory offset associated with the field
     */
    function get_class_dump(pointer: number): ClassField[];
}
