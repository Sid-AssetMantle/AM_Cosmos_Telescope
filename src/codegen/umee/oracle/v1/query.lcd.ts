import { LCDClient } from "@cosmology/lcd";
import { QueryExchangeRates, QueryExchangeRatesResponseSDKType, QueryActiveExchangeRates, QueryActiveExchangeRatesResponseSDKType, QueryFeederDelegation, QueryFeederDelegationResponseSDKType, QueryMissCounter, QueryMissCounterResponseSDKType, QuerySlashWindow, QuerySlashWindowResponseSDKType, QueryAggregatePrevote, QueryAggregatePrevoteResponseSDKType, QueryAggregatePrevotes, QueryAggregatePrevotesResponseSDKType, QueryAggregateVote, QueryAggregateVoteResponseSDKType, QueryAggregateVotes, QueryAggregateVotesResponseSDKType, QueryParams, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.exchangeRates = this.exchangeRates.bind(this);
    this.activeExchangeRates = this.activeExchangeRates.bind(this);
    this.feederDelegation = this.feederDelegation.bind(this);
    this.missCounter = this.missCounter.bind(this);
    this.slashWindow = this.slashWindow.bind(this);
    this.aggregatePrevote = this.aggregatePrevote.bind(this);
    this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
    this.aggregateVote = this.aggregateVote.bind(this);
    this.aggregateVotes = this.aggregateVotes.bind(this);
    this.params = this.params.bind(this);
  }
  /* ExchangeRates returns exchange rates of all denoms,
   or, if specified, returns a single denom */
  async exchangeRates(params: QueryExchangeRates): Promise<QueryExchangeRatesResponseSDKType> {
    const endpoint = `umee/oracle/v1/denoms/exchange_rates/${params.denom}`;
    return await this.req.get<QueryExchangeRatesResponseSDKType>(endpoint);
  }
  /* ActiveExchangeRates returns all active denoms */
  async activeExchangeRates(_params: QueryActiveExchangeRates = {}): Promise<QueryActiveExchangeRatesResponseSDKType> {
    const endpoint = `umee/oracle/v1/denoms/active_exchange_rates`;
    return await this.req.get<QueryActiveExchangeRatesResponseSDKType>(endpoint);
  }
  /* FeederDelegation returns feeder delegation of a validator */
  async feederDelegation(params: QueryFeederDelegation): Promise<QueryFeederDelegationResponseSDKType> {
    const endpoint = `umee/oracle/v1/validators/${params.validatorAddr}/feeder`;
    return await this.req.get<QueryFeederDelegationResponseSDKType>(endpoint);
  }
  /* MissCounter returns oracle miss counter of a validator */
  async missCounter(params: QueryMissCounter): Promise<QueryMissCounterResponseSDKType> {
    const endpoint = `umee/oracle/v1/validators/${params.validatorAddr}/miss`;
    return await this.req.get<QueryMissCounterResponseSDKType>(endpoint);
  }
  /* SlashWindow returns slash window information */
  async slashWindow(_params: QuerySlashWindow = {}): Promise<QuerySlashWindowResponseSDKType> {
    const endpoint = `umee/oracle/v1/slash_window`;
    return await this.req.get<QuerySlashWindowResponseSDKType>(endpoint);
  }
  /* AggregatePrevote returns an aggregate prevote of a validator */
  async aggregatePrevote(params: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponseSDKType> {
    const endpoint = `umee/oracle/v1/validators/${params.validatorAddr}/aggregate_prevote`;
    return await this.req.get<QueryAggregatePrevoteResponseSDKType>(endpoint);
  }
  /* AggregatePrevotes returns aggregate prevotes of all validators */
  async aggregatePrevotes(_params: QueryAggregatePrevotes = {}): Promise<QueryAggregatePrevotesResponseSDKType> {
    const endpoint = `umee/oracle/v1/validators/aggregate_prevotes`;
    return await this.req.get<QueryAggregatePrevotesResponseSDKType>(endpoint);
  }
  /* AggregateVote returns an aggregate vote of a validator */
  async aggregateVote(params: QueryAggregateVote): Promise<QueryAggregateVoteResponseSDKType> {
    const endpoint = `umee/oracle/v1/valdiators/${params.validatorAddr}/aggregate_vote`;
    return await this.req.get<QueryAggregateVoteResponseSDKType>(endpoint);
  }
  /* AggregateVotes returns aggregate votes of all validators */
  async aggregateVotes(_params: QueryAggregateVotes = {}): Promise<QueryAggregateVotesResponseSDKType> {
    const endpoint = `umee/oracle/v1/validators/aggregate_votes`;
    return await this.req.get<QueryAggregateVotesResponseSDKType>(endpoint);
  }
  /* Params queries all parameters. */
  async params(_params: QueryParams = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `umee/oracle/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}