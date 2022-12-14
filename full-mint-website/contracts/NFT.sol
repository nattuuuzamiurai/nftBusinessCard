// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BusinessCardNft is ERC721, Ownable {
    string internal baseTokenUri;
    uint256 public totalSupply = 1;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseTokenURI
    ) ERC721(_name, _symbol) {
        baseTokenUri = _baseTokenURI;
    }

    mapping(address => uint256) public minted;
    mapping(address => uint256) public ownerById;

    function getId(address owner) public view returns (uint256 id) {
        return ownerById[owner];
    }

    function mint(address to) public onlyOwner {
        require(minted[to] == 0);
        minted[to] = 1;
        uint256 tokenId = totalSupply;
        ownerById[to] = tokenId;
        totalSupply++;
        _safeMint(to, tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Token does not exist!");
        return baseTokenUri;
    }

    function withdraw() external onlyOwner {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "withdraw failed");
    }
}
