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
