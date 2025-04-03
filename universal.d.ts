/** The global engine object exposed by perception. */
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
    function register_on_network_call(callback: (data: unknown) => void): void;

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

/** The global fs object for filesystem operations. */
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

/** The global input object exposed by perception. */
namespace input {
    /**
     * Returns true if the key is currently pressed down.
     * @param key The key to check.
     */
    function is_key_pressed(key: string): boolean;

    /**
     * Returns true if the key's toggle state is active.
     * @param key The key to check.
     */
    function is_key_toggled(key: string): boolean;

    type MousePosition = [x: number, y: number] & { x: number; y: number };

    /**
     * Returns the current mouse position (x, y).
     */
    function get_mouse_position(): MousePosition;

    type MouseDelta = [dx: number, dy: number] & { dx: number; dy: number };

    /**
     * Returns the current mouse movement delta (dx, dy).
     */
    function get_mouse_move_delta(): MouseDelta;

    /**
     * Returns the scroll wheel delta.
     */
    function get_scroll_delta(): number;

    /**
     * Returns the clipboard text.
     */
    function get_clipboard(): string;

    /**
     * Sets the clipboard text.
     * @param text The text to set.
     */
    function set_clipboard(text: string): void;

    /**
     * Returns a boolean indicating whether the menu is open.
     */
    function is_menu_open(): boolean;

    /**
     * Forces the overlay cursor to be active or inactive based on the boolean state.
     * @param state If true, force the overlay cursor to be active; otherwise inactive.
     */
    function set_overlay_force_cursor_active(state: boolean): void;
}

/** The global `m` object for memory allocation/reading/writing. */
namespace m {
    /**
     * An opaque handle to a memory block.
     */
    type MemoryHandle = unknown;

    /**
     * Allocates a memory block and returns a handle.
     * @param size The number of bytes to allocate.
     */
    function alloc(size: number): MemoryHandle;

    /**
     * Frees an allocated memory block.
     * @param handle The handle of the memory block to free.
     */
    function free(handle: MemoryHandle): void;

    /**
     * Reads a double (64-bit floating point) from memory.
     * @param handle The memory handle.
     * @param offset The byte offset within the allocated block.
     */
    function read_double(handle: MemoryHandle, offset: number): number;

    /**
     * Reads a float (32-bit floating point) from memory.
     */
    function read_float(handle: MemoryHandle, offset: number): number;

    /**
     * Reads a 64-bit integer from memory.
     */
    function read_qword(handle: MemoryHandle, offset: number): number;

    /**
     * Reads a 32-bit integer from memory.
     */
    function read_dword(handle: MemoryHandle, offset: number): number;

    /**
     * Reads a 16-bit integer from memory.
     */
    function read_word(handle: MemoryHandle, offset: number): number;

    /**
     * Reads an 8-bit integer (byte) from memory.
     */
    function read_byte(handle: MemoryHandle, offset: number): number;

    /**
     * Writes a double (64-bit float) to memory.
     */
    function write_double(handle: MemoryHandle, offset: number, value: number): void;

    /**
     * Writes a float (32-bit float) to memory.
     */
    function write_float(handle: MemoryHandle, offset: number, value: number): void;

    /**
     * Writes a 64-bit integer to memory.
     */
    function write_qword(handle: MemoryHandle, offset: number, value: number): void;

    /**
     * Writes a 32-bit integer to memory.
     */
    function write_dword(handle: MemoryHandle, offset: number, value: number): void;

    /**
     * Writes a 16-bit integer to memory.
     */
    function write_word(handle: MemoryHandle, offset: number, value: number): void;

    /**
     * Writes an 8-bit integer (byte) to memory.
     */
    function write_byte(handle: MemoryHandle, offset: number, value: number): void;

    /**
     * Reads a Unicode (wide) string from memory.
     * (Assumes some encoding convention in the game’s engine.)
     */
    function read_wide_string(handle: MemoryHandle, offset: number): string;

    /**
     * Writes a Unicode (wide) string to memory.
     */
    function write_wide_string(handle: MemoryHandle, offset: number, str: string): void;

    /**
     * Writes a (presumably ASCII/UTF-8) string to memory.
     */
    function write_string(handle: MemoryHandle, offset: number, str: string): void;

    /**
     * Gets the current size of the allocated buffer.
     */
    function get_size(handle: MemoryHandle): number;
}

/** The global net object for sending HTTP requests. */
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

/** The global `proc` object for process-related operations. */
namespace proc {
    /**
     * Returns true if a process is currently attached.
     */
    function is_attached(): boolean;

    /**
     * Returns true if the attached process has exited.
     */
    function did_exit(): boolean;

    /**
     * Returns the process ID of the attached process.
     */
    function get_pid(): number;

    /**
     * Returns the PEB (Process Environment Block) address of the attached process.
     */
    function peb(): number;

    /**
     * Returns the base address of the attached process.
     */
    function base_address(): number;

    /**
     * Describes a module's base address and size.
     */
    type BaseModuleInfo = [base: number, size: number] & { base: number; size: number };

    /**
     * Returns the attached process's main module (base module) information.
     * @returns { base, size } for the main module.
     */
    function get_base_module(): BaseModuleInfo;

    /**
     * Finds a module by name and returns its base address and size.
     * Returns null if the module is not found (or if your environment
     * indicates it differently, adjust accordingly).
     */
    function find_module(module_name: string): BaseModuleInfo | null;

    /**
     * Finds a memory address matching the given signature within the specified
     * base address range.
     * @param base_address The starting address to search.
     * @param size The number of bytes to search.
     * @param signature A pattern/signature to match in memory.
     * @returns The address where the signature was found, or 0 if not found.
     */
    function find_signature(base_address: number, size: number, signature: string): number;

    function read_double(address: number): number;

    function read_float(address: number): number;

    function read_dword(address: number): number;

    function read_int64(address: number): number;

    function read_int32(address: number): number;

    function read_int16(address: number): number;

    function read_int8(address: number): number;

    function write_double(address: number, value: number): void;

    function write_float(address: number, value: number): void;

    function write_int64(address: number, value: number): void;

    function write_int32(address: number, value: number): void;

    function write_int16(address: number, value: number): void;

    function write_int8(address: number, value: number): void;

    /**
     * Reads an ASCII (or UTF-8) string from memory, up to `size` bytes.
     */
    function read_string(address: number, size: number): string;

    /**
     * Writes an ASCII (or UTF-8) string into memory at the specified address.
     */
    function write_string(address: number, text: string): void;

    /**
     * Reads a wide (Unicode) string from memory, up to `size` characters.
     */
    function read_wide_string(address: number, size: number): string;

    /**
     * Writes a wide (Unicode) string into memory at the specified address.
     */
    function write_wide_string(address: number, text: string): void;

    /**
     * Allocates memory in the remote process. Returns the starting address of
     * the allocated memory.
     */
    function alloc(size: number): number;

    /**
     * Frees previously allocated memory at the given address.
     */
    function free(address: number): void;
}

/** The global render object for drawing operations. */
namespace render {
    /**
     * Draws a line between two points.
     * @param x1 Starting point X.
     * @param y1 Starting point Y.
     * @param x2 Ending point X.
     * @param y2 Ending point Y.
     * @param r Red component (0-255).
     * @param g Green component (0-255).
     * @param b Blue component (0-255).
     * @param a Alpha component (0-255).
     * @param thickness The thickness of the line.
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
     * @param x The top-left X coordinate.
     * @param y The top-left Y coordinate.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param r Red component (0-255).
     * @param g Green component (0-255).
     * @param b Blue component (0-255).
     * @param a Alpha component (0-255).
     * @param thickness The thickness of the rectangle border.
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
        thickness: number
    ): void;

    /**
     * Draws a circle.
     * @param x The center X coordinate.
     * @param y The center Y coordinate.
     * @param radius The radius of the circle.
     * @param r Red component (0-255).
     * @param g Green component (0-255).
     * @param b Blue component (0-255).
     * @param a Alpha component (0-255).
     * @param thickness The thickness of the circle border.
     */
    function draw_circle(
        x: number,
        y: number,
        radius: number,
        r: number,
        g: number,
        b: number,
        a: number,
        thickness: number
    ): void;

    /** An opaque handle to a bitmap object. */
    type BitmapHandle = unknown;

    /**
     * Creates a bitmap from a URL.
     * @param url The URL to load the bitmap from.
     * @returns A handle to the created bitmap.
     */
    function create_bitmap_from_url(url: string): BitmapHandle;

    /**
     * Creates a bitmap from a buffer handle.
     * @param buffer_handle Some handle that represents an image buffer.
     * @returns A handle to the created bitmap.
     */
    function create_bitmap_from_buffer(buffer_handle: unknown): BitmapHandle;

    /**
     * Creates a bitmap from a file on disk.
     * @param file_name The file path to the image.
     * @returns A handle to the created bitmap.
     */
    function create_bitmap_from_file(file_name: string): BitmapHandle;

    /**
     * Draws a bitmap.
     * @param bitmap The bitmap handle to draw.
     * @param x The X coordinate where the bitmap should be drawn.
     * @param y The Y coordinate where the bitmap should be drawn.
     * @param width The width to draw the bitmap.
     * @param height The height to draw the bitmap.
     * @param opacity The opacity (0.0 to 1.0).
     */
    function draw_bitmap(
        bitmap: BitmapHandle,
        x: number,
        y: number,
        width: number,
        height: number,
        opacity: number
    ): void;

    /** An opaque handle to a font object. */
    type FontHandle = unknown;

    /**
     * Creates a font.
     * @param font_name The name of the font (system or custom).
     * @param size The size of the font.
     * @param weight The weight of the font (e.g., 400 for normal, 700 for bold).
     */
    function create_font(font_name: string, size: number, weight: number): FontHandle;

    /**
     * Draws text with the specified font and color.
     * @param font The font handle to use.
     * @param x The X coordinate to draw the text.
     * @param y The Y coordinate to draw the text.
     * @param text The text string to render.
     * @param r Red component (0-255).
     * @param g Green component (0-255).
     * @param b Blue component (0-255).
     * @param a Alpha component (0-255).
     */
    function draw_text(
        font: FontHandle,
        x: number,
        y: number,
        text: string,
        r: number,
        g: number,
        b: number,
        a: number
    ): void;

    type TextDimensions = [width: number, height: number] & { width: number; height: number };

    /**
     * Measures the size of the given text when rendered with the specified font.
     * Returns a tuple with the width and height of the rendered text.
     * You can access the width and height either by index or by property name.
     */
    function measure_text(font: FontHandle, text: string): TextDimensions;

    type ViewportSize = TextDimensions;

    /**
     * Gets the current viewport size.
     * Returns a tuple with the width and height of the viewport.
     * You can access the dimensions either by index or by property name.
     */
    function get_viewport(): ViewportSize;

    /**
     * Gets the viewport DPI scale factor.
     * @returns The DPI scale (e.g., 1.0 for 100%, 1.25 for 125%, etc.).
     */
    function get_viewport_dpi_scale(): number;

    /**
     * Gets the current overlay FPS (frames per second).
     */
    function get_fps(): number;
}

/** The global winapi object exposed by perception. */
namespace winapi {
    /**
     * Returns the system uptime in milliseconds.
     */
    function get_tickcount64(): number;
}
