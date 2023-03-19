import ISearchItem from './search-item.interface';

export default interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ISearchItem[];
}
