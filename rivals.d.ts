/** @noSelfInFile **/

/**
 * The global marvel rivals object exposed by perception.
 * ```ts
 * // Utility: logs pointers, ints, or nulls cleanly
 * function log_ptr(name: string, value: number | null): void {
 *     if (value == null || value === 0) {
 *         engine.log(name + " = nil or 0", 255, 0, 0, 255);
 *     } else {
 *         engine.log(name + " = 0x" + value.toString(16).toUpperCase(), 0, 255, 0, 255);
 *     }
 * }
 *
 * // Test get_local_player
 * const local_player = marvel_rivals.get_local_player();
 * if (!local_player) {
 *     engine.log("Local player not available", 255, 0, 0, 255);
 * } else {
 *     engine.log("== Local Player ==", 0, 255, 255, 255);
 *     for (const [k, v] of Object.entries(local_player)) {
 *         engine.log(`${k} = ${String(v)}`, 200, 200, 200, 255);
 *     }
 * }
 *
 * // Test get_player_list
 * const players = marvel_rivals.get_player_list();
 * if (!players) {
 *     engine.log("Player list unavailable", 255, 0, 0, 255);
 * } else {
 *     engine.log("== Player List ==", 255, 255, 0, 255);
 *     players.forEach((player, i) => {
 *         engine.log("Player " + i, 0, 255, 0, 255);
 *         for (const [k, v] of Object.entries(player)) {
 *             engine.log("  " + k + " = " + String(v), 180, 180, 180, 255);
 *         }
 *     });
 * }
 *
 * // Test world_to_screen
 * const [sx, sy] = marvel_rivals.world_to_screen(0, 0, 0);
 * engine.log(`world_to_screen(0,0,0) = ${sx?.toFixed(1) ?? "0.0"}, ${sy?.toFixed(1) ?? "0.0"}`, 0, 255, 255, 255);
 *
 * // Test get_world
 * log_ptr("marvel_rivals.get_world", marvel_rivals.get_world());
 *
 * // Test get_game_instance
 * log_ptr("marvel_rivals.get_game_instance", marvel_rivals.get_game_instance());
 *
 * // Test get_game_state
 * log_ptr("marvel_rivals.get_game_state", marvel_rivals.get_game_state());
 *
 * // Test get_bone_position from local player (if available)
 * if (local_player) {
 *     const mesh = local_player.skeleton_mesh;
 *     const bone_id = local_player.bone_id_head;
 *     if (mesh !== 0 && bone_id) {
 *         const [x, y, z] = marvel_rivals.get_bone_position(mesh, bone_id);
 *         engine.log(`bone_position(head) = ${x.toFixed(1)}, ${y.toFixed(1)}, ${z.toFixed(1)}`, 0, 200, 255, 255);
 *     } else {
 *         engine.log("Invalid mesh or bone_id_head", 255, 0, 0, 255);
 *     }
 * }
 * ```
 */
namespace marvel_rivals {
    /**
     * Represents a single player's data in Marvel Rivals, including pointers/addresses
     * to various components and bone indices.
     */
    interface RivalsPlayer {
        // Core component pointers
        skeleton_mesh: number;
        root_component: number;
        child_doctor_component: number;
        child_doctor: number;
        bone_array: number;
        health_component: number;
        player_state: number;
        pawn: number;

        // Name of the hero/character
        hero_name: string;

        // Bone ID fields (pointers/indices), if available
        bone_id_head?: number;
        bone_id_chest?: number;

        // Additional bones mentioned
        bone_id_upper_head?: number;
        bone_id_lower_head?: number;
        bone_id_left_shoulder?: number;
        bone_id_left_upper_arm?: number;
        bone_id_left_forearm?: number;
        bone_id_left_hand?: number;
        bone_id_right_shoulder?: number;
        bone_id_right_upper_arm?: number;
        bone_id_right_forearm?: number;
        bone_id_right_hand?: number;
    }

    /**
     * Retrieves data for the local player, including pointers to key components
     * and bone indices.
     * @returns A RivalsPlayer object representing the local player.
     */
    function get_local_player(): RivalsPlayer;

    /**
     * Returns a table (array) of players, each containing pointers to
     * components and bone indices.
     */
    function get_player_list(): RivalsPlayer[];

    /**
     * Returns a pointer (number) to the AGameState object (or equivalent).
     */
    function get_world(): number;

    /**
     * Returns a pointer (number) to the UGameInstance object (or equivalent).
     */
    function get_game_instance(): number;

    /**
     * Retrieves the 3D world position of a specified bone from a given skeletal mesh.
     * @param skeletal_mesh A pointer to the skeletal mesh.
     * @param bone_id The bone index or ID to retrieve.
     * @returns An object with the x, y, z coordinates in world space.
     */
    function get_bone_position(
        skeletal_mesh: number,
        bone_id: number
    ): [x: number, y: number, z: number];

    /**
     * Describes a single class field, including its name and memory offset.
     */
    interface ClassField {
        name: string;
        offset: number;
    }

    /**
     * Returns a table (array) containing the class fields for the specified
     * class pointer in Marvel Rivals. Each entry in the table includes:
     *  - name (string)   The name of the class field.
     *  - offset (number) The memory offset associated with the field.
     * ```
     *  {
     *     [1] = { name = "PlayerController::AcknowledgedPawn", offset = 0x120 },
     *     [2] = { name = "Controller::ControlRotation", offset = 0x154 },
     *     ...
     * }
     * ```
     * ```ts
     * local pointer = 0x1A2B3C4D  -- Replace with actual class pointer (For Example uworld)
     * local dump = marvel_rivals.get_class_dump(pointer)
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
     * local pointer = 0x1A2B3C4D  -- Replace with actual class pointer (For Example uworld)
     * local dump = marvel_rivals.get_class_dump(pointer)
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

    /** Returns uintptr_t of UWorld */
    function get_world(): number;

    /** Returns uintptr_t of UGameInstance */
    function get_game_instance(): number;

    /** Returns uintptr_t of AGameStateBase */
    function get_game_state(): number;

    /**
     * Converts world coordinates to screen space
     * @param x - World X coordinate
     * @param y - World Y coordinate
     * @param z - World Z coordinate
     * @returns [screenX, screenY]
     */
    function world_to_screen(x: number, y: number, z: number): [number, number];

    /**
     * Returns the world position of the specified bone
     * @param skeletal_mesh - Pointer to the mesh
     * @param bone_id - Bone index
     * @returns [x, y, z]
     */
    function get_bone_position(skeletal_mesh: number, bone_id: number): [number, number, number];
}
