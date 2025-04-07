/** @noSelfInFile **/

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
     *  ```
     *  {
     *     [1] = { name = "PlayerCameraManager::CameraCachePrivate", offset = 0x120 },
     *     [2] = { name = "Character::Mesh", offset = 0x154 },
     *     ...
     * }
     *  ```
     *  ```ts
     * local pointer = 0x1A2B3C4D  -- Replace with actual class pointer (For example uworld)
     * local dump = valorant.get_class_dump(pointer)
     *
     * if dump == nil then
     *     engine.log("Class dump failed.", 255, 0, 0, 255)
     *     return
     * end
     *
     * for i, entry in ipairs(dump) do
     *     engine.log(string.format("%s = 0x%X", entry.name, entry.offset), 0, 255, 0, 255)
     * end
     * ```
     * ```ts
     * local pointer = 0x1A2B3C4D  -- Replace with actual class pointer (For example uworld)
     * local dump = valorant.get_class_dump(pointer)
     *
     * if dump == nil then
     *     engine.log("Class dump failed.", 255, 0, 0, 255)
     *     return
     * end
     *
     * local lines = {}
     *
     * for i, entry in ipairs(dump) do
     *     table.insert(lines, string.format("%s = 0x%X", entry.name, entry.offset))
     * end
     *
     * local text = table.concat(lines, "\n")
     *
     * fs.write_to_file("class_dump.txt", text)
     * engine.log("Class dump written to class_dump.txt", 0, 255, 0, 255)
     * ```
     */
    function get_class_dump(pointer: number): ClassField[];
}
