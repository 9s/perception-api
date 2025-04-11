/** @noSelfInFile **/

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
