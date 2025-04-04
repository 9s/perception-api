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
    ): { x: number; y: number; z: number };

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
     */
    function get_class_dump(pointer: number): ClassField[];
}
