// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BusinesssCardNft is ERC721, Ownable {
    string internal baseTokenUri;
    constructor(string memory _name, string memory _symbol, string memory _baseTokenURI)
        ERC721(_name, _symbol){
            baseTokenUri = _baseTokenURI;
            
        }

}
