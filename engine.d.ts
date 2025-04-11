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
