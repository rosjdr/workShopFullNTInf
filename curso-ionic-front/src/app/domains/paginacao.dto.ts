import { PageableDTO } from './pageable.dto';
import { SortDTO } from './sort.dto';

export interface PaginacaoDTO<T>{
    content: T[];
    pageable: PageableDTO;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: SortDTO;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}