/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Group, Admin, Binary, InstantiateMsg, ContractInstantiateMsg, ExecuteMsg, QueryMsg, AdminResponse, Addr, MemberListResponse, Member, MemberResponse } from "./Splits.types";
import { SplitsQueryClient } from "./Splits.client";
export interface SplitsReactQuery<TResponse, TData = TResponse> {
  client: SplitsQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface SplitsListMembersQuery<TData> extends SplitsReactQuery<MemberListResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useSplitsListMembersQuery<TData = MemberListResponse>({
  client,
  args,
  options
}: SplitsListMembersQuery<TData>) {
  return useQuery<MemberListResponse, Error, TData>(["splitsListMembers", client.contractAddress, JSON.stringify(args)], () => client.listMembers({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface SplitsMemberQuery<TData> extends SplitsReactQuery<MemberResponse, TData> {
  args: {
    address: string;
  };
}
export function useSplitsMemberQuery<TData = MemberResponse>({
  client,
  args,
  options
}: SplitsMemberQuery<TData>) {
  return useQuery<MemberResponse, Error, TData>(["splitsMember", client.contractAddress, JSON.stringify(args)], () => client.member({
    address: args.address
  }), options);
}
export interface SplitsGroupQuery<TData> extends SplitsReactQuery<Addr, TData> {}
export function useSplitsGroupQuery<TData = Addr>({
  client,
  options
}: SplitsGroupQuery<TData>) {
  return useQuery<Addr, Error, TData>(["splitsGroup", client.contractAddress], () => client.group(), options);
}
export interface SplitsAdminQuery<TData> extends SplitsReactQuery<AdminResponse, TData> {}
export function useSplitsAdminQuery<TData = AdminResponse>({
  client,
  options
}: SplitsAdminQuery<TData>) {
  return useQuery<AdminResponse, Error, TData>(["splitsAdmin", client.contractAddress], () => client.admin(), options);
}