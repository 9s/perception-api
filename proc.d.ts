/** @noSelfInFile **/

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

    /** Reads a double from memory. */
    function read_double(address: number): number;

    /** Reads a float from memory. */
    function read_float(address: number): number;

    /** Reads a 64-bit integer from memory. */
    function read_int64(address: number): number;

    /** Reads a 32-bit integer from memory. */
    function read_int32(address: number): number;

    /** Reads a 16-bit integer from memory. */
    function read_int16(address: number): number;

    /** Reads an 8-bit integer from memory. */
    function read_int8(address: number): number;

    /** Writes a double to memory. */
    function write_double(address: number, value: number): void;

    /** Writes a float to memory. */
    function write_float(address: number, value: number): void;

    /** Writes a 64-bit integer to memory. */
    function write_int64(address: number, value: number): void;

    /** Writes a 32-bit integer to memory. */
    function write_int32(address: number, value: number): void;

    /** Writes a 16-bit integer to memory. */
    function write_int16(address: number, value: number): void;

    /** Writes an 8-bit integer to memory. */
    function write_int8(address: number, value: number): void;

    /**
     * Reads memory into a buffer.
     * @param address The address to read from.
     * @param buffer The buffer handle (from m.alloc).
     * @param size Number of bytes to read.
     */
    function read_to_memory_buffer(address: number, buffer: number, size: number): void;

    /**
     * Writes memory from a buffer.
     * @param address The destination address.
     * @param buffer The buffer handle (from m.alloc).
     * @param size Number of bytes to write.
     */
    function write_from_memory_buffer(address: number, buffer: number, size: number): void;

    /**
     * Reads a string from memory.
     * @param address The starting memory address.
     * @param size Maximum number of bytes to read.
     * @returns The read string.
     */
    function read_string(address: number, size: number): string;

    /**
     * Writes a string to memory.
     * @param address The destination address.
     * @param text The string to write.
     */
    function write_string(address: number, text: string): void;

    /**
     * Reads a wide string (UTF-16) from memory.
     * @param address The memory address.
     * @param size The number of characters to read.
     * @returns The wide string.
     */
    function read_wide_string(address: number, size: number): string;

    /**
     * Writes a wide string (UTF-16) to memory.
     * @param address The memory address.
     * @param text The wide string to write.
     */
    function write_wide_string(address: number, text: string): void;
}
