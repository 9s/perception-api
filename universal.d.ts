/** @noSelfInFile **/

/**
 * ```ts
 * -- Attempt to attach to Notepad by process name
 * if not proc.attach_by_name("notepad.exe") then
 *     engine.log("Failed to attach to Notepad!", 255, 0, 0, 255)
 *     return
 * end
 * engine.log("Successfully attached to Notepad!", 0, 255, 0, 255)
 * -- Get the base address of Notepad
 * local base_address = proc.base_address()
 * if base_address == nil then
 *     engine.log("Failed to get Notepad base address!", 255, 0, 0, 255)
 *     return
 * end
 * engine.log("Base Address: " .. string.format("0x%X", base_address), 255, 255, 255, 255)
 * -- Define the offset for e_lfanew in the DOS header
 * local e_lfanew_offset = 0x3C
 * -- Read the e_lfanew value (DWORD) from the PE header
 * local e_lfanew = proc.read_int32(base_address + e_lfanew_offset)
 * if e_lfanew == nil then
 *     engine.log("Failed to read e_lfanew!", 255, 0, 0, 255)
 *     return
 * end
 * engine.log("e_lfanew: " ..e_lfanew, 0, 255, 0, 255)
 * ```
 */
namespace proc {
    /**
     * Attach to a process using its PID (process ID).
     * @param process_id - The ID of the process (integer).
     * @param has_corrupt_cr3 - Indicates if the CR3 register is corrupt.
     */
    function attach_by_pid(process_id: number, has_corrupt_cr3: boolean): void;

    /**
     * Attach to a process using its name.
     * @param process_name - The name of the process (string).
     * @param has_corrupt_cr3 - Indicates if the CR3 register is corrupt.
     */
    function attach_by_name(process_name: string, has_corrupt_cr3: boolean): void;

    /**
     * Attach to a process using the window class and window name.
     * @param window_class - The class of the window (string).
     * @param window_name - The name of the window (string).
     * @param has_corrupt_cr3 - Indicates if the CR3 register is corrupt.
     */
    function attach_by_window(window_class: string, window_name: string, has_corrupt_cr3: boolean): void;

    /**
     * Check if the attachment was successful.
     * @returns `true` if attached, otherwise `false`.
     */
    function is_attached(): boolean;
}
