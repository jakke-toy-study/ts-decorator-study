// logging.ts
export function LogExecutionTime(label: string) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`[${label}] 실행 시작: ${propertyKey}()`);
            const start = performance.now();

            const result = originalMethod.apply(this, args);

            const end = performance.now();
            console.log(`[${label}] 실행 완료: ${propertyKey}()`);
            console.log(`[${label}] 실행 시간: ${(end - start).toFixed(2)}ms`);

            return result;
        };

        return descriptor;
    };
}