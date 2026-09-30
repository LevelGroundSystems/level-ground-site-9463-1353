import { useMutation, useQuery } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useSubmitDiagnostic() {
	return useMutation(orpc.diagnostics.submit.mutationOptions());
}

export function useDiagnosticList(passcode: string, enabled: boolean) {
	return useQuery(
		orpc.diagnostics.list.queryOptions({
			input: { passcode },
			enabled,
			retry: false,
			staleTime: 10_000,
		}),
	);
}
