public class Fibonacci {

    // recursive
    public static long fib1(int n) {
        if (n == 0)
            return 0;
        if (n == 1)
            return 1;
        return fib1(n - 1) + fib1(n - 2);
    }

    // uising loop
    public static long fib2(int n) {
        if (n == 0)
            return 0;

        long[] f = new long[n + 1];
        f[0] = 0;
        f[1] = 1;

        for (int i = 2; i <= n; i++) {
            f[i] = f[i - 1] + f[i - 2];
        }
        return f[n];
    }

    // golden ratio
    public static long fib3(int n) {
        double phi = (1 + Math.sqrt(5)) / 2; // Golden Ratio
        return Math.round(Math.pow(phi, n) / Math.sqrt(5)); // Approximation
    }

    public static void measureTime(int n) {
        long startTime, endTime, elapsedTime;

        // Measure time for fib1 (Recursive)
        startTime = System.currentTimeMillis();
        long fib1Result = fib1(n);
        endTime = System.currentTimeMillis();
        elapsedTime = endTime - startTime;
        System.out.println("fib1(" + n + ") = " + fib1Result + " | Time: " + elapsedTime + " ms");

        // Measure time for fib2 (Iterative)
        startTime = System.currentTimeMillis();
        long fib2Result = fib2(n);
        endTime = System.currentTimeMillis();
        elapsedTime = endTime - startTime;
        System.out.println("fib2(" + n + ") = " + fib2Result + " | Time: " + elapsedTime + " ms");

        // Measure time for Golden Ratio
        startTime = System.currentTimeMillis();
        long fib3Result = fib3(n);
        endTime = System.currentTimeMillis();
        elapsedTime = endTime - startTime;
        System.out.println("fib3(" + n + ") = " + fib3Result + " | Time: " + elapsedTime + " ms");
    }

    public static void main(String[] args) {
        int[] testValues = { 100000 };

        for (int n : testValues) {
            System.out.println("\nTesting Fibonacci for n = " + n + ":");
            measureTime(n);
        }
    }
}
