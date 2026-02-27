// GPU Vendor Detection
// Sets data-gpu attribute on <html> for dynamic theme colors
// AMD/Default = Coral Red | NVIDIA = Coral Green | Intel = Coral Blue | Other = Silver
(function() {
    function detect() {
        try {
            var c = document.createElement('canvas');
            var gl = c.getContext('webgl') || c.getContext('experimental-webgl');
            if (!gl) return null;
            var ext = gl.getExtension('WEBGL_debug_renderer_info');
            if (!ext) return null;
            var r = (gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) || '').toLowerCase();
            var v = (gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) || '').toLowerCase();
            if (r.includes('nvidia') || v.includes('nvidia')) return 'nvidia';
            if (r.includes('amd') || r.includes('radeon') || v.includes('amd') || v.includes('ati')) return 'amd';
            if (r.includes('intel') || v.includes('intel')) return 'intel';
            return 'other';
        } catch(e) { return null; }
    }

    var stored = null;
    try { stored = localStorage.getItem('gpu-vendor'); } catch(e) {}

    var gpu = stored || detect() || 'amd';

    try { localStorage.setItem('gpu-vendor', gpu); } catch(e) {}

    // AMD is the default CSS theme, only set attribute for others
    if (gpu !== 'amd') {
        document.documentElement.setAttribute('data-gpu', gpu);
    }
})();
