/** @noSelfInFile **/

/**
 * The global engine object exposed by perception.
 * ```ts
 * // Callback function for engine tick (executed every tick)
 * const engineTickCallback = () => {
 *     // Your logic here (executed on every engine tick)
 * }
 *
 * // Callback function for when the script is unloaded
 * const onUnloadCallback = () => {
 *     engine.log("Script is being unloaded", 255, 255, 255, 255)
 * }
 *
 * const onNetCallback = (str: string) => {
 *     engine.log("Network Response: " + str, 255, 255, 255, 255)
 * }
 *
 * // Register the callbacks with engine
 * engine.register_on_engine_tick(engineTickCallback)
 * engine.register_onunload(onUnloadCallback)
 * engine.register_on_network_callback(onNetCallback)
 * ```
 */
namespace engine {
    /**
     * Registers a function that runs when the script is unloaded.
     * @param callback A function that is called on unload.
     */
    function register_onunload(callback: () => void): void;

    /**
     * Registers a function that runs every engine tick.
     * @param callback A function that is called each tick.
     */
    function register_on_engine_tick(callback: () => void): void;

    /**
     * Registers a function to handle network responses (or requests).
     * @param callback A function that is called when a network event occurs.
     */
    function register_on_network_callback(callback: (data: number, url: string) => void): void;

    /**
     * Logs a message with the specified RGBA color values.
     * @param message The string to log.
     * @param r Red component (0-255).
     * @param g Green component (0-255).
     * @param b Blue component (0-255).
     * @param a Alpha component (0-255).
     */
    function log(message: string, r: number, g: number, b: number, a: number): void;

    /**
     * Returns the username of the current user.
     */
    function get_username(): string;
}

/**
 * The global fs object for filesystem operations.
 * ```ts
 * // Assuming fs and engine are predefined objects with similar functionality
 *
 * if (fs.does_file_exist("test.txt")) {
 *     // Read the file contents
 *     const readData = fs.read_from_file("test.txt");
 *
 *     // Delete the file after reading
 *     fs.delete_file("test.txt");
 *
 *     // Log the file contents
 *     engine.log(readData, 255, 255, 255, 255);
 * } else {
 *     // Create and write data to the file
 *     fs.write_to_file("test.txt", "test data");
 *
 *     // Log that the file did not exist
 *     engine.log("File does not exist", 255, 255, 255, 255);
 * }
 * ```
 */
namespace fs {
    /**
     * Checks if a file exists.
     * @param file_name The name/path of the file.
     * @returns True if the file exists, false otherwise.
     */
    function does_file_exist(file_name: string): boolean;

    /**
     * Writes data to a file.
     * @param file_name The name/path of the file.
     * @param data The string data to write.
     */
    function write_to_file(file_name: string, data: string): void;

    /**
     * Reads data from a file.
     * @param file_name The name/path of the file.
     * @returns The file contents as a string.
     */
    function read_from_file(file_name: string): string;

    /**
     * Deletes a file.
     * @param file_name The name/path of the file.
     */
    function delete_file(file_name: string): void;

    /**
     * Writes all contents from a buffer to a file.
     * @param file_name The name/path of the file.
     * @param buffer_handle A handle or object containing the data to write.
     */
    function write_to_file_from_buffer(file_name: string, buffer_handle: unknown): void;

    /**
     * Reads all file contents into a buffer.
     * @param file_name The name/path of the file.
     * @param buffer_handle A handle or object that will receive the file data.
     */
    function read_from_file_to_buffer(file_name: string, buffer_handle: unknown): void;

    /**
     * Gets the size of a file in bytes.
     * @param file_name The name/path of the file.
     * @returns The size of the file in bytes.
     */
    function get_file_size(file_name: string): number;
}

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


/**
 * The global `m` object for memory allocation/reading/writing.
 * ```ts
 * // Allocate a memory block of 64 bytes
 * const memory_handle = m.alloc(64);
 *
 * // Check if allocation was successful
 * if (memory_handle !== 0) {
 *   engine.log("Memory allocated successfully!", 0, 255, 0, 255);
 *
 *   // Write values to the allocated memory
 *   m.write_int32(memory_handle, 0, 123456);       // Write a 32-bit integer at offset 0
 *   m.write_float(memory_handle, 4, 3.14);         // Write a float at offset 4
 *   m.write_double(memory_handle, 8, 2.71828);     // Write a double at offset 8
 *   m.write_int8(memory_handle, 16, 127);          // Write an 8-bit integer at offset 16
 *
 *   // Read values from the allocated memory
 *   const int_value = m.read_int32(memory_handle, 0);
 *   const float_value = m.read_float(memory_handle, 4);
 *   const double_value = m.read_double(memory_handle, 8);
 *   const int8_value = m.read_int8(memory_handle, 16);
 *
 *   // Log the values read from memory
 *   engine.log("Read int32: " + int_value, 255, 255, 255, 255);
 *   engine.log("Read float: " + float_value, 255, 255, 255, 255);
 *   engine.log("Read double: " + double_value, 255, 255, 255, 255);
 *   engine.log("Read int8: " + int8_value, 255, 255, 255, 255);
 *
 *   // Free the allocated memory
 *   m.free(memory_handle);
 *   engine.log("Memory freed successfully!", 0, 255, 0, 255);
 * } else {
 *   engine.log("Memory allocation failed!", 255, 0, 0, 255);
 * }
 * ```
 */
namespace m {
    /**
     * Allocates a block of memory.
     * @param size - Size of the memory block in bytes.
     * @returns A handle representing the allocated memory.
     */
    function alloc(size: number): number;

    /**
     * Frees an allocated memory block.
     * @param handle - The handle of the memory block to free.
     */
    function free(handle: number): void;

    /**
     * Writes a 32-bit integer to memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @param value - The 32-bit integer value to write.
     */
    function write_int32(handle: number, offset: number, value: number): void;

    /**
     * Writes a 64-bit integer to memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @param value - The 64-bit integer value to write.
     */
    function write_int32(handle: number, offset: number, value: number): void;

    /**
     * Writes a float to memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @param value - The float value to write.
     */
    function write_float(handle: number, offset: number, value: number): void;

    /**
     * Writes a double to memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @param value - The double value to write.
     */
    function write_double(handle: number, offset: number, value: number): void;

    /**
     * Writes an 8-bit integer to memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @param value - The 8-bit integer value to write.
     */
    function write_int8(handle: number, offset: number, value: number): void;

    /**
     * Reads a 32-bit integer from memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @returns The 32-bit integer value read from memory.
     */
    function read_int32(handle: number, offset: number): number;

    /**
     * Reads a 64-bit integer from memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @returns The 64-bit integer value read from memory.
     */
    function read_int64(handle: number, offset: number): number;

    /**
     * Reads a float from memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @returns The float value read from memory.
     */
    function read_float(handle: number, offset: number): number;

    /**
     * Reads a double from memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @returns The double value read from memory.
     */
    function read_double(handle: number, offset: number): number;

    /**
     * Reads an 8-bit integer from memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @returns The 8-bit integer value read from memory.
     */
    function read_int8(handle: number, offset: number): number;

    /**
     * Reads a string from memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @returns The string read from memory.
     */
    function read_string(handle: number, offset: number): string;

    /**
     * Reads a Unicode (wide) string from memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @returns The wide string read from memory.
     */
    function read_wide_string(handle: number, offset: number): string;

    /**
     * Writes a string to memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @param str - The string to write.
     */
    function write_string(handle: number, offset: number, str: string): void;

    /**
     * Writes a Unicode (wide) string to memory.
     * @param handle - Memory handle.
     * @param offset - Offset within the memory block.
     * @param str - The wide string to write.
     */
    function write_wide_string(handle: number, offset: number, str: string): void;

    /**
     * Gets the current size of the buffer.
     * @param handle - Memory handle.
     * @returns The size of the buffer in bytes.
     */
    function get_size(handle: number): number;
}

/**
 * The global net object for sending HTTP requests.
 * ```ts
 * // Callback function to handle network responses
 * function network_callback(response_data: number, url: string): void {
 *     fs.write_to_file_from_buffer("dump.txt", response_data);
 *     engine.log("Received network response: " + m.read_string(response_data, 0), 0, 255, 0, 255);
 * }
 *
 * // Register the network callback
 * engine.register_on_network_callback(network_callback);
 *
 * // Function to send an HTTP request
 * function send_example_request(): void {
 *     const url = "https://example.com/api/data";
 *
 *     // Example headers
 *     const headers = "MyLuaClient/1.0";
 *
 *     // Example POST data
 *     const post_fields = "param1=value1&param2=value2";
 *
 *     // Send the HTTP request
 *     net.send_request(url, headers, post_fields);
 *
 *     engine.log("Request sent to: " + url, 255, 255, 255, 255);
 * }
 *
 * // Execute the function to send the request
 * send_example_request();
 * ```
 */
namespace net {
    /**
     * Sends an HTTP request.
     * The response string will be returned through a network callback.
     *
     * @param url        The URL to request.
     * @param headers    Optional headers as a string.
     * @param post_fields Optional post fields as a string.
     */
    function send_request(url: string, headers?: string, post_fields?: string): void;
}

/**
 * The global `proc` object for process-related operations.
 * ```ts
 * // Callback function to handle network responses
 * function network_callback(response_data: number, url: string): void {
 *     fs.write_to_file_from_buffer("dump.txt", response_data);
 *     engine.log("Received network response: " + m.read_string(response_data, 0), 0, 255, 0, 255);
 * }
 *
 * // Register the network callback
 * engine.register_on_network_callback(network_callback);
 *
 * // Function to send an HTTP request
 * function send_example_request(): void {
 *     const url = "https://example.com/api/data";
 *
 *     // Example headers
 *     const headers = "MyLuaClient/1.0";
 *
 *     // Example POST data
 *     const post_fields = "param1=value1&param2=value2";
 *
 *     // Send the HTTP request
 *     net.send_request(url, headers, post_fields);
 *
 *     engine.log("Request sent to: " + url, 255, 255, 255, 255);
 * }
 *
 * // Execute the function to send the request
 * send_example_request();
 * ```
 */
namespace proc {
    /**
     * Checks if a process is currently attached.
     * @returns True if a process is attached.
     */
    function is_attached(): boolean;

    /**
     * Checks if the attached process has exited.
     * @returns True if the attached process has exited.
     */
    function did_exit(): boolean;

    /**
     * Retrieves the process ID.
     * @returns The process ID.
     */
    function pid(): number;

    /**
     * Returns the process's PEB (Process Environment Block) address.
     */
    function peb(): number;

    /**
     * Returns the base address of the attached process.
     */
    function base_address(): number;

    /**
     * Returns the base module address and size.
     * @returns An object with base and size.
     */
    function get_base_module(): { base: number; size: number };

    /**
     * Finds a module by name and returns its base address and size.
     * @param module_name Name of the module.
     * @returns An object with base and size.
     */
    function find_module(module_name: string): { base: number; size: number };

    /**
     * Finds a memory pattern within a module.
     * @param base_address Start address of the search.
     * @param size Size of the search range.
     * @param signature Byte signature pattern.
     * @returns The address of the found signature.
     */
    function find_signature(base_address: number, size: number, signature: string): number;

    // ---- Memory Reading ----

    /** Reads a double from memory. */
    function read_double(address: number|bigint): number;

    /** Reads a float from memory. */
    function read_float(address: number|bigint): number;

    /** Reads a 64-bit integer from memory. */
    function read_int64(address: number|bigint): bigint;

    /** Reads a 32-bit integer from memory. */
    function read_int32(address: number|bigint): number;

    /** Reads a 16-bit integer from memory. */
    function read_int16(address: number|bigint): number;

    /** Reads an 8-bit integer from memory. */
    function read_int8(address: number|bigint): number;

    // ---- Memory Writing ----

    /** Writes a double to memory. */
    function write_double(address: number|bigint, value: number): void;

    /** Writes a float to memory. */
    function write_float(address: number|bigint, value: number): void;

    /** Writes a 64-bit integer to memory. */
    function write_int64(address: number|bigint, value: bigint): void;

    /** Writes a 32-bit integer to memory. */
    function write_int32(address: number|bigint, value: number): void;

    /** Writes a 16-bit integer to memory. */
    function write_int16(address: number|bigint, value: number): void;

    /** Writes an 8-bit integer to memory. */
    function write_int8(address: number|bigint, value: number): void;

    // ---- Buffer Operations ----

    /**
     * Reads memory into a buffer.
     * @param address The address to read from.
     * @param buffer The buffer handle (from m.alloc).
     * @param size Number of bytes to read.
     */
    function read_to_memory_buffer(address: number|bigint, buffer: number, size: number): void;

    /**
     * Writes memory from a buffer.
     * @param address The destination address.
     * @param buffer The buffer handle (from m.alloc).
     * @param size Number of bytes to write.
     */
    function write_from_memory_buffer(address: number|bigint, buffer: number, size: number): void;

    // ---- String Operations ----

    /**
     * Reads a string from memory.
     * @param address The starting memory address.
     * @param size Maximum number of bytes to read.
     * @returns The read string.
     */
    function read_string(address: number|bigint, size: number): string;

    /**
     * Writes a string to memory.
     * @param address The destination address.
     * @param text The string to write.
     */
    function write_string(address: number|bigint, text: string): void;

    /**
     * Reads a wide string (UTF-16) from memory.
     * @param address The memory address.
     * @param size The number of characters to read.
     * @returns The wide string.
     */
    function read_wide_string(address: number|bigint, size: number): string;

    /**
     * Writes a wide string (UTF-16) to memory.
     * @param address The memory address.
     * @param text The wide string to write.
     */
    function write_wide_string(address: number|bigint, text: string): void;
}

/**
 * The global render object for drawing operations. *
 * // Create a font for rendering text
 * const fontHandle = render.create_font("Verdana", 25, 400);
 *
 * // Get the screen size
 * const [screenSizeX, screenSizeY] = render.get_viewport_size();
 *
 * // Callback function for rendering
 * ```ts
 * function engineTickCallback(): void {
 *     // Draw a white diagonal line
 *     render.draw_line(500, 500, 600, 600, 255, 255, 255, 255, 5);
 *
 *     // Draw a filled yellow rectangle
 *     render.draw_rectangle(700, 700, 50, 50, 255, 255, 0, 255, 1, true);
 *
 *     // Draw a filled red circle
 *     render.draw_circle(900, 900, 25, 255, 0, 0, 255, 5, true);
 *
 *     // Draw text in magenta with a white outline
 *     render.draw_text(fontHandle, "Test", 1000, 1000, 255, 0, 255, 255, 5, 255, 255, 255, 255);
 *
 *     // Draw a red triangle
 *     render.draw_triangle(500, 500, 600, 600, 800, 800, 255, 0, 0, 255, 1, false);
 * }
 * ```
 */
namespace render {
    /**
     * Creates a font with the specified name, size, and weight.
     *
     * @param name - The font name (e.g., "Verdana").
     * @param size - The font size in pixels.
     * @param weight - The font weight (e.g., 400 for normal, 700 for bold).
     * @returns A font handle to use with `draw_text`.
     */
    function create_font(name: string, size: number, weight: number): number;

    /**
     * Retrieves the screen size for reference.
     *
     * @returns A tuple [width, height] representing the screen resolution.
     */
    function get_viewport_size(): [number, number];

    /**
     * Draws a diagonal line.
     *
     * @param x1 - Starting x-coordinate.
     * @param y1 - Starting y-coordinate.
     * @param x2 - Ending x-coordinate.
     * @param y2 - Ending y-coordinate.
     * @param r - Red component (0–255).
     * @param g - Green component (0–255).
     * @param b - Blue component (0–255).
     * @param a - Alpha (opacity) component (0–255).
     * @param thickness - Line thickness in pixels.
     */
    function draw_line(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        r: number,
        g: number,
        b: number,
        a: number,
        thickness: number
    ): void;

    /**
     * Draws a rectangle.
     *
     * @param x - Top-left x-coordinate.
     * @param y - Top-left y-coordinate.
     * @param width - Width of the rectangle.
     * @param height - Height of the rectangle.
     * @param r - Red component (0–255).
     * @param g - Green component (0–255).
     * @param b - Blue component (0–255).
     * @param a - Alpha component (0–255).
     * @param thickness - Border thickness.
     * @param filled - Whether the rectangle is filled (true) or outlined (false).
     */
    function draw_rectangle(
        x: number,
        y: number,
        width: number,
        height: number,
        r: number,
        g: number,
        b: number,
        a: number,
        thickness: number,
        filled: boolean
    ): void;

    /**
     * Draws a filled circle.
     *
     * @param x - Center x-coordinate.
     * @param y - Center y-coordinate.
     * @param radius - Radius of the circle.
     * @param r - Red component (0–255).
     * @param g - Green component (0–255).
     * @param b - Blue component (0–255).
     * @param a - Alpha component (0–255).
     * @param thickness - Stroke thickness (used if not filled).
     * @param filled - Whether the circle is filled (true) or outlined (false).
     */
    function draw_circle(
        x: number,
        y: number,
        radius: number,
        r: number,
        g: number,
        b: number,
        a: number,
        thickness: number,
        filled: boolean
    ): void;

    /**
     * Draws text on the screen with optional outline.
     *
     * @param font - Font handle created using `create_font`.
     * @param text - The text string to render.
     * @param x - X-coordinate of the text position.
     * @param y - Y-coordinate of the text position.
     * @param r - Red color component (0–255).
     * @param g - Green color component (0–255).
     * @param b - Blue color component (0–255).
     * @param a - Alpha (opacity) of the text (0–255).
     * @param outline_thickness - Thickness of the outline.
     * @param o_r - Red component of the outline color.
     * @param o_g - Green component of the outline color.
     * @param o_b - Blue component of the outline color.
     * @param o_a - Alpha of the outline color.
     */
    function draw_text(
        font: number,
        text: string,
        x: number,
        y: number,
        r: number,
        g: number,
        b: number,
        a: number,
        outline_thickness: number,
        o_r: number,
        o_g: number,
        o_b: number,
        o_a: number
    ): void;

    /**
     * Draws a triangle.
     *
     * @param x1 - First point x-coordinate.
     * @param y1 - First point y-coordinate.
     * @param x2 - Second point x-coordinate.
     * @param y2 - Second point y-coordinate.
     * @param x3 - Third point x-coordinate.
     * @param y3 - Third point y-coordinate.
     * @param r - Red component (0–255).
     * @param g - Green component (0–255).
     * @param b - Blue component (0–255).
     * @param a - Alpha component (0–255).
     * @param thickness - Outline thickness (used if not filled).
     * @param filled - Whether to fill the triangle or draw outline only.
     */
    function draw_triangle(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        r: number,
        g: number,
        b: number,
        a: number,
        thickness: number,
        filled: boolean
    ): void;

    /**
     * Gets the current overlay FPS.
     *
     * @returns Frames per second as a number.
     */
    function get_fps(): number;

    /**
     * Creates a bitmap from a URL.
     *
     * @param url - The URL to fetch the image from.
     * @returns A bitmap handle.
     */
    function create_bitmap_from_url(url: string): number;

    /**
     * Creates a bitmap from a buffer handle.
     *
     * @param buffer_handle - A handle to the memory buffer containing image data.
     * @returns A bitmap handle.
     */
    function create_bitmap_from_buffer(buffer_handle: number): number;

    /**
     * Creates a bitmap from a file.
     *
     * @param file_name - Path or name of the file.
     * @returns A bitmap handle.
     */
    function create_bitmap_from_file(file_name: string): number;
}

/** The global winapi object exposed by perception. */
namespace winapi {
    /**
     * Returns the system uptime in milliseconds.
     */
    function get_tickcount64(): number;
}
