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
