/** @noSelfInFile **/

namespace trace {
    /**
     * Casts a trace (ray) from (startX, startY, startZ) to (endX, endY, endZ).
     * @returns True if the endpoint is hit/visible, false otherwise.
     */
    function cast(
        startX: number,
        startY: number,
        startZ: number,
        endX: number,
        endY: number,
        endZ: number
    ): boolean;
}

namespace cs2 {
    /**
     * Returns a pointer (integer) to the requested interface in the specified module.
     * @param module_name The name of the module (e.g., "client.dll").
     * @param interface_name The name of the interface (e.g., "VClient018").
     */
    function get_interface(module_name: string, interface_name: string): number;

    /**
     * Returns a pointer (integer) to the specified cvar (console variable).
     * @param cvar_name The name of the cvar (e.g., "sv_cheats").
     */
    function get_cvar(cvar_name: string): number;

    /**
     * Returns a pointer (integer) to the entity list interface.
     */
    function get_entity_list(): number;

    /**
     * Returns a pointer (integer) to the entity system interface.
     */
    function get_entity_system(): number;

    /**
     * Returns a pointer (integer) to the global vars structure.
     */
    function get_global_vars(): number;

    /**
     * Returns a pointer (integer) to the view matrix or matrix interface.
     */
    function get_view_matrix(): number;

    /**
     * Converts a 3D world position (x, y, z) into 2D screen coordinates.
     * @returns An object containing the screen-space x and y.
     */
    function world_to_screen(
        x: number,
        y: number,
        z: number
    ): [x: number, y: number];

    /**
     * Gets the 3D world position of the specified bone in the given bone array.
     * @param bone_array A pointer (integer) referencing the bone array data.
     * @param bone The bone index to retrieve the position for.
     * @returns An object with the x, y, z world coordinates of the bone.
     */
    function get_bone_position(
        bone_array: number,
        bone: number
    ): [x: number, y: number, z: number];

    /**
     * Represents a single player's data, including whether they're a teammate.
     */
    interface PlayerInfo {
        controller: number;
        pawn: number;
        clipping_weapon: number;
        bone_array: number;
        is_teammate: boolean;
    }

    /**
     * Represents the local player's data (same pointers, no teammate flag).
     */
    interface LocalPlayerInfo {
        controller: number;
        pawn: number;
        clipping_weapon: number;
        bone_array: number;
    }

    /**
     * Returns an array of PlayerInfo objects representing each entity/player.
     * ```ts
     * const players = cs2.get_player_list();
     *
     * if (players == null) {
     *     engine.log("No player list found.", 255, 0, 0, 255);
     *     return;
     * }
     *
     * for (const [index, player] of Object.entries(players)) {
     *     engine.log("Player " + index, 255, 255, 0, 255);
     *     engine.log("  controller = " + String(player.controller), 200, 200, 200, 255);
     *     engine.log("  pawn = " + String(player.pawn), 200, 200, 200, 255);
     *     engine.log("  clipping_weapon = " + String(player.clipping_weapon), 200, 200, 200, 255);
     *     engine.log("  bone_array = " + String(player.bone_array), 200, 200, 200, 255);
     * }
     * ```
     */
    function get_player_list(): PlayerInfo[];

    /**
     * Returns controller, pawn, clipping_weapon, and bone_array pointers
     * for the local player.
     * ```ts
     * const local_player = cs2.get_local_player();
     *
     * if (local_player == null) {
     *     engine.log("Local player not available.", 255, 0, 0, 255);
     *     return;
     * }
     *
     * engine.log("Local Player Info", 0, 255, 0, 255);
     * engine.log("  controller = " + String(local_player.controller), 200, 200, 200, 255);
     * engine.log("  pawn = " + String(local_player.pawn), 200, 200, 200, 255);
     * engine.log("  clipping_weapon = " + String(local_player.clipping_weapon), 200, 200, 200, 255);
     * engine.log("  bone_array = " + String(local_player.bone_array), 200, 200, 200, 255);
     * ```
     */
    function get_local_player(): LocalPlayerInfo;

    /**
     * Represents a single field in the CS2 schema dump.
     * ```
     * {
     *     [1] = { name = "CCSPlayer_MovementServices::m_bInStuckTest", offset = 0x25A },
     *     [2] = { name = "CCSPlayer_MovementServices::m_flStuckCheckTime", offset = 0x268},
     *     [3] = { name = "CCSPlayer_MovementServices::m_nTraceCount", offset = 0x468},
     *     ...
     * }
     * ```
     * ```ts
     * local dump = cs2.get_schema_dump()
     *
     * if dump == nil then
     *     engine.log("Schema dump not available.", 255, 0, 0, 255)
     *     return
     * end
     *
     * for i, entry in ipairs(dump) do
     *     engine.log(string.format("%s = 0x%X", entry.name, entry.offset), 0, 255, 0, 255)
     * end
     * ```
     */
    interface SchemaField {
        /** The schema field name (e.g. "CCSPlayer_MovementServices.m_iInStuckTest"). */
        name: string;
        /** The memory offset associated with this field. */
        offset: number;
    }

    /**
     * Returns an array of schema fields for Counter-Strike 2.
     * If no schema dump is available (e.g., the process is not attached), returns null.
     * ```ts
     * local dump = cs2.get_schema_dump()
     *
     * if dump == nil then
     *     engine.log("No schema dump available or process not attached.", 255, 0, 0, 255)
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
     * fs.write_to_file("offset_dump.txt", text)
     * engine.log("Offset dump written to offset_dump.txt", 0, 255, 0, 255)
     * ```
     */
    function get_schema_dump(): SchemaField[] | null;
}
