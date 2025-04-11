/**
 * The global input object exposed by perception.
 * ```ts
 * // Check if a key is pressed and log it
 * function check_key_input() {
 *     if (input.is_key_pressed(32)) { // Spacebar key
 *         engine.log("Spacebar pressed!", 255, 255, 255, 255);
 *     }
 *
 *     if (input.is_key_down(17)) { // Ctrl key
 *         engine.log("Ctrl key is being held down!", 255, 255, 255, 255);
 *     }
 *
 *     if (input.is_key_toggled(20)) { // Caps Lock key
 *         engine.log("Caps Lock is toggled!", 255, 255, 255, 255);
 *     }
 * }
 *
 * // Get mouse position and movement delta
 * function check_mouse_input() {
 *     const [x, y] = input.get_mouse_position();
 *     const [dx, dy] = input.get_mouse_move_delta();
 *     const scroll_delta = input.get_scroll_delta();
 *
 *     engine.log("Mouse Position: " + x + ", " + y, 255, 255, 255, 255);
 *     engine.log("Mouse Movement Delta: " + dx + ", " + dy, 255, 255, 255, 255);
 *     engine.log("Mouse Scroll Delta: " + scroll_delta, 255, 255, 255, 255);
 * }
 *
 * // Clipboard operations
 * function clipboard_example() {
 *     const clipboard_text = input.get_clipboard();
 *     engine.log("Clipboard Content: " + clipboard_text, 255, 255, 255, 255);
 *
 *     input.set_clipboard("New Clipboard Data");
 *     engine.log("Clipboard updated!", 255, 255, 255, 255);
 * }
 *
 * // Menu and overlay handling
 * function menu_overlay_example() {
 *     if (input.is_menu_open()) {
 *         engine.log("Menu is open!", 255, 255, 255, 255);
 *     } else {
 *         engine.log("Menu is closed!", 255, 255, 255, 255);
 *     }
 *
 *     // Force the cursor to remain active
 *     input.set_overlay_force_cursor_active(true);
 *     engine.log("Overlay cursor forced active!", 255, 255, 255, 255);
 * }
 *
 * // Register functions to be called every engine tick
 * engine.register_on_engine_tick(function() {
 *     check_key_input();
 *     check_mouse_input();
 *     menu_overlay_example();
 * });
 * ```
 */
namespace input {
    /**
     * Simulates mouse input using location or flags.
     * @param dx - The horizontal movement or location.
     * @param dy - The vertical movement or location.
     * @param flag - Mouse action flag (e.g., button press, release, move).
     */
    function simulate_mouse(dx: number, dy: number, flag: number): void;

    /**
     * Simulates keyboard input using virtual key code and flags.
     * @param key - The virtual key code.
     * @param flag - Keyboard action flag (e.g., key down, key up).
     */
    function simulate_keyboard(key: number, flag: number): void;

    /**
     * Detects if a key was pressed once.
     * @param key - The virtual key code.
     * @returns True if the key was pressed once.
     */
    function is_key_pressed(key: number): boolean;

    /**
     * Detects if a key is being held down.
     * @param key - The virtual key code.
     * @returns True if the key is currently down.
     */
    function is_key_down(key: number): boolean;

    /**
     * Checks if a key's toggle state is active (e.g., Caps Lock, Num Lock).
     * @param key - The virtual key code.
     * @returns True if the key is toggled on.
     */
    function is_key_toggled(key: number): boolean;

    /**
     * Gets the current position of the mouse.
     * @returns An object containing x and y coordinates.
     */
    function get_mouse_position(): [x: number, y: number];

    /**
     * Gets the delta movement of the mouse since the last check.
     * @returns An object containing dx and dy values.
     */
    function get_mouse_move_delta(): [dx: number, dy: number];

    /**
     * Gets the scroll wheel delta movement.
     * @returns An object containing dx and dy scroll deltas.
     */
    function get_scroll_delta(): [dx: number, dy: number];

    /**
     * Retrieves the current clipboard content.
     * @returns Clipboard text as a string.
     */
    function get_clipboard(): string;

    /**
     * Sets the system clipboard content.
     * @param text - The string to set to the clipboard.
     */
    function set_clipboard(text: string): void;

    /**
     * Checks whether the menu is currently open.
     * @returns True if the menu is open.
     */
    function is_menu_open(): boolean;

    /**
     * Forces the overlay cursor to be active or inactive.
     * @param state - True to activate the overlay cursor, false to deactivate.
     */
    function set_overlay_force_cursor_active(state: boolean): void;
}
