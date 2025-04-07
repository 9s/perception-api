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
    ): { x: number; y: number };

    /**
     * Gets the 3D world position of the specified bone in the given bone array.
     * @param bone_array A pointer (integer) referencing the bone array data.
     * @param bone The bone index to retrieve the position for.
     * @returns An object with the x, y, z world coordinates of the bone.
     */
    function get_bone_position(
        bone_array: number,
        bone: number
    ): { x: number; y: number; z: number };

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
     */
    function get_player_list(): PlayerInfo[];

    /**
     * Returns controller, pawn, clipping_weapon, and bone_array pointers
     * for the local player.
     */
    function get_local_player(): LocalPlayerInfo;

    /**
     * Represents a single field in the CS2 schema dump.
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
     */
    function get_schema_dump(): SchemaField[] | null;
}
