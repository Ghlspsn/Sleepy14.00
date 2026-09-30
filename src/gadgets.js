// Gadgets for PS5 14.00 (Sleepy)
// Note: These are standard Sleepy offsets. If your build is different, adjust them.
const wk_gadgetmap = {
    "pop rdi": 0x00025e4e, 
    "pop rsi": 0x000a4690,
    "pop rdx": 0x000025f4,
    "pop rdx r12": 0x00042a06,
    "pop rcx": 0x000a016c,
    "pop r8": 0x0005f7a0,
    "pop r9": 0x000a016d,
    "pop r10": 0x0009f1b0,
    "pop r11": 0x000025f3,
    "pop rsp": 0x00048990,
    "pop rbp": 0x000025f2,
    "pop r12 r13 r14 r15": 0x000132b0,
    "pop r12 r13 r14": 0x000132b1,
    "pop r12 r13": 0x000132b2,
    "pop r12": 0x000132b3,
    "ret": 0x00003917,
    "exit": 0x00003918,
};

const syscall_map = {
    "SYS_GETPID": 172,
    "SYS_MMAP": 477,
    "SYS_MPROTECT": 476,
    "SYS_KALLOC": 571,
    "SYS_KFREE": 572,
    "SYS_KREAD": 573,
    "SYS_KWRITE": 574,
};

// Helper to add base to gadgets/syscalls
function resolveGadgets(base, gadgetsMap) {
    const resolved = {};
    for (const key in gadgetsMap) {
        resolved[key] = base.add32(gadgetsMap[key]);
    }
    return resolved;
}

function resolveSyscalls(base, sysMap) {
    const resolved = {};
    for (const key in sysMap) {
        resolved[key] = base.add32(sysMap[key]);
    }
    return resolved;
}