var bases32 = [1216, 1836, 8885, 4564, 10978, 5228, 15613, 13941, 1553, 173, 3615, 3144, 10065, 9259, 233, 2362, 6244, 6431, 10863, 5920, 6408, 6841, 22124, 2290, 21303, 6935, 4835, 7652, 1051, 445, 5807, 842, 1534, 22140, 1282, 1733, 347, 6311, 14081, 5775, 186, 703, 9862, 13277, 1720, 17816, 10433, 45402, 2535, 9158, 2143, 2840, 664, 29074, 24924, 1035, 41482, 1065, 10189, 8417, 130, 4551, 5159, 48886, 786, 1938, 1013, 2139, 7171, 2143, 16873, 188, 5555, 4149, 1045, 3891, 2853, 23642, 148, 3585, 3027, 280, 3101, 9918, 6452, 2716, 855, 990, 1925, 13557, 1063, 6916, 4965, 4380, 587, 3214, 1808, 1036, 6356, 8191, 6783, 14424, 6929, 1002, 840, 422, 44215, 7753, 5799, 3415, 231, 2013, 8895, 2081, 883, 3855, 5577, 876, 3574, 1925, 1192, 865, 7376, 12254, 5952, 2516, 20463, 186, 5411, 22765, 6191, 1084, 2127, 4305, 115, 7821, 1265, 16169, 1705, 1857, 24938, 220, 3650, 1057, 482, 1690, 2718, 4309, 7496, 1515, 7972, 3763, 5481, 2817, 3430, 1423, 714, 6734, 328, 2550, 2580, 10047, 2797, 155, 5951, 3817, 54850, 2173, 1318, 246, 1807, 2958, 2697, 337, 4871, 2439, 736, 37112, 1226, 527, 7531, 5418, 7242, 2421, 16135, 7015, 8432, 2605, 5638, 5161, 11515, 14949, 748, 5003, 9048, 4679, 1915, 7652, 9657, 660, 3054, 15469, 2910, 775, 14106, 1749, 136, 2673, 25233, 5633, 1244, 2567, 4989, 1637, 1273, 11423, 4347, 7509, 6061, 531, 4986, 1088, 1627, 160, 6416, 11350, 921, 306, 18117, 1238, 463, 1722, 996, 3866, 6576, 6055, 130, 24080, 7331, 3922, 8632, 2706, 24108, 32374, 4237, 15302, 287, 2296, 1220, 20922, 3350, 2089, 562, 11745, 163, 11951];

// Computes a ^ n % mod
function power(a, n, mod) {
    var power = a, result = 1;
    while (n) {
        if (n & 1) {
            result = (result * power) % mod;
        }
        power = (power * power) % mod;
        n >>= 1;
    }
    return result;
}

// n−1 = 2^s * d with d odd by factoring powers of 2 from n−1
function witness(n, s, d, a) {
    var x = power(a, d, n), y = 0;
    while (s) {
        y = (x * x) % n;
        if (y == 1 && x != 1 && x != n - 1) {
            return false;
        }
        x = y;
        --s;
    }
    return y == 1;
}

// Fast optimized Miller-Rabin primality test, up to 2^32
function isPrimeMR(n) {
    if (n < 11) {
        return n == 2 || n == 3 || n == 5 || n == 7;
    }
    if (!(n & 1) || !(n % 3) || !(n % 5) || !(n % 7)) {
        return false;
    }
    if (n < 121) {
        return true;
    }
    if (!(n % 11) || !(n % 13) || !(n % 17) || !(n % 19) ||
        !(n % 23) || !(n % 29) || !(n % 31) || !(n % 37) ||
        !(n % 41) || !(n % 43) || !(n % 47) || !(n % 53)) {
        return false;
    }
    if (n < 3481) {
        return true;
    }
    var d = n / 2, s = 1;
    while (!(d & 1)) { // JavaScript only supports Math.clz32(), but not ctz
        d /= 2;
        ++s;
    }
    return witness(n, s, d, bases32[((0xAD625B89 * n) & 0xFFFFFFFF) >> 24]);
}

function naivePrimeFactor(n) {
    if (n % 2 == 0) {
        return 2;
    }
    var max = Math.floor(Math.sqrt(n));
    for (var i = 3; i <= max; i += 2) {
        if (n % i == 0) {
            return i;
        }
    }
    return n;
}

function primeSieve(n) {
    var sieve = Array.apply(null, new Array(n)).map(Number.prototype.valueOf, 0); // Urgh
    var i, j;
    sieve[0] = true;
    sieve[1] = true;
    for (i = 4; i < n; i += 2) {
        sieve[i] = true;
    }
    for (i = 3; i * i < n; i += 2) {
        if (sieve[i]) {
            continue;
        }
        for (j = i * i; j < n; j += i + i) {
            sieve[j] = true;
        }
    }
    var primes = [];
    for (i = 0; i < sieve.length; i++) {
        if (!sieve[i]) {
            primes.push(i);
        }
    }
    
    return primes;
}

function primeIndices(n) {
    var indices = Array.apply(null, new Array(n)).map(Number.prototype.valueOf, 0);
    for (var i = 0; i < tables.primes.length; i++) {
        indices[tables.primes[i]] = i + 1;
    }
    return indices;
}